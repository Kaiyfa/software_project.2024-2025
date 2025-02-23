from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import ManufacturerViewSet, MachineViewSet, OperatorViewSet, PurchaseHistoryViewSet
from .views import CustomTokenObtainPairView

router = DefaultRouter()
router.register(r'manufacturers', ManufacturerViewSet)
router.register(r'machines', MachineViewSet)
router.register(r'operators', OperatorViewSet)
router.register(r'purchase-history', PurchaseHistoryViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
#     path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Get access and refresh tokens
#     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
# ]

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]