from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PurchaseOrderViewSet

router = DefaultRouter()
router.register("purchaseorder", PurchaseOrderViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
