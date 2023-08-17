from django.contrib.auth.models import User, Group
from rest_framework import serializers

class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['category, name, price, checked']