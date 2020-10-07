from rest_framework import authentication
from business.models import PurchaseOrder
from .serializers import PurchaseOrderSerializer
from rest_framework import viewsets


class PurchaseOrderViewSet(viewsets.ModelViewSet):
    serializer_class = PurchaseOrderSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = PurchaseOrder.objects.all()
