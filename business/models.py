from django.conf import settings
from django.db import models


class PurchaseOrder(models.Model):
    "Generated Model"
    poNumber = models.BigIntegerField()
    createdBy = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        related_name="purchaseorder_createdBy",
    )


# Create your models here.
