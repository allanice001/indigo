from django.conf.urls import url, include
from django.conf import settings
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter(trailing_slash=False)
router.register(r'countries', views.CountryViewSet, base_name='country')

if settings.INDIGO_CONTENT_API_VERSIONED:
    # Versioned API URLs
    urlpatterns = [
        url(r'^v1/', include('indigo_content_api.urls_v1', namespace='v1'))
    ]
else:
    # Unversioned API URLs, latest only
    urlpatterns = [
        url(r'^', include('indigo_content_api.urls_v1', namespace='v1'))
    ]
