from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ItemSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('name')
    serializer_class = ItemSerializer
    permission_classes = [permissions.IsAuthenticated]
