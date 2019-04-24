import re
from lxml import etree

from indigo.analysis.refs.base import BaseRefsFinder
from indigo.plugins import plugins


@plugins.register('refs')
class RefsFinderENGza(BaseRefsFinder):
    """ Finds references to Acts in documents, of the form:

        Act 52 of 2001
        Act no. 52 of 1998
        Income Tax Act, 1962 (No 58 of 1962)
        Constitution [of [the Republic of] South Africa] [Act][,] [1996]

        If not in South Africa ('za'), should default to indigo/analysis/refs/global.py (doesn't include 'Constitution')

    """

    # country, language, locality
    locale = ('za', 'eng', None)

    # if Act part changes, you may also want to update indigo/analysis/refs/global.py
    act_re = re.compile(
        r'''\b
            (
             Act,?\s+(\d{4}\s+)?                    # Act   or   Act, 1998
              \(?                                   # Tax Act, 1962 (No 58 of 1962)
              (?P<ref>
               ([nN]o\.?\s*)?(?P<num>\d+)\s+of\s+(?P<year>\d{4})   # no. NN of NNNN
                                                    #     NN of NNNN
              )
            )
            |
            \bConstitution\b(\s+of(\s+the\s+Republic\s+of)?\s+South\s+Africa)?((\s+Act)?,?\s+1996)?
        ''', re.X)
    candidate_xpath = ".//text()[(contains(., 'Act') or contains(., 'Constitution')) and not(ancestor::a:ref)]"

    constitution = 'Constitution'

    def make_href(self, match):
        year = match.group('year')
        number = match.group('num')
        if self.constitution in match.group(0):
            return '/za/act/1996/constitution'
        elif self.frbr_uri.country == 'za' and year == '1996' and number == '108':
            # the Constitution was originally Act 108 of 1996
            return '/za/act/1996/constitution'
        else:
            return '/%s/act/%s/%s' % (self.frbr_uri.country, year, number)

    def make_ref(self, match):
        if self.constitution in match.group(0):
            group = 0
        elif match.group(2):
            group = 3
        else:
            group = 1

        ref = etree.Element(self.ref_tag)
        ref.text = match.group(group)
        ref.set('href', self.make_href(match))
        return (ref, match.start(group), match.end(group))


@plugins.register('refs')
class RefsFinderAFRza(RefsFinderENGza):
    """ Finds references to Acts in documents, of the form:

        Wet 52 van 2001
        Wet no. 52 van 1998
        Grondwet [van [die Republiek van] Suid-Afrika] [Wet][,] [1996]

    """

    # country, language, locality
    locale = ('za', 'afr', None)

    act_re = re.compile(
        r'''\b
            (?P<ref>
             Wet,?\s+([nN]o\.?\s*)?
             (
              (?P<num>\d+)+\s+van\s+(?P<year>\d{4})
             )
            )
            |
            \bGrondwet\b(\s+van(\s+die\s+Republiek\s+van)?\s+Suid[- ]Afrika)?((\s+Wet)?,?\s+1996)?
    ''', re.X)
    candidate_xpath = ".//text()[(contains(., 'Wet') or contains(., 'Grondwet')) and not(ancestor::a:ref)]"

    constitution = 'Grondwet'

    def make_ref(self, match):
        if self.constitution in match.group(0):
            group = 0
        else:
            group = 'ref'

        ref = etree.Element(self.ref_tag)
        ref.text = match.group(group)
        ref.set('href', self.make_href(match))
        return (ref, match.start(group), match.end(group))
