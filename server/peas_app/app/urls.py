from django.urls import include, path
from rest_framework import routers
from .views import ItemViewSet

router = routers.DefaultRouter()
router.register(r'users', ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace=restframework))
]