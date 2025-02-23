from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ManufacturerViewSet, MachineViewSet, OperatorViewSet, PurchaseHistoryViewSet

router = DefaultRouter()
router.register(r'manufacturers', ManufacturerViewSet)
router.register(r'machines', MachineViewSet)
router.register(r'operators', OperatorViewSet)
router.register(r'purchase-history', PurchaseHistoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]