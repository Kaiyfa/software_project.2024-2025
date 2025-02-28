from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import ManufacturerViewSet, MachineViewSet, OperatorViewSet, PurchaseHistoryViewSet
from .views import CustomTokenObtainPairView
from django.urls import path
from .views import (
    homepage,  # Import the homepage view
    user_role,  # Import the user_role view
    login,      # Import the login view
    ManufacturerViewSet,
    MachineViewSet,
    OperatorViewSet,
    PurchaseHistoryViewSet,
    CustomTokenObtainPairView,
)

router = DefaultRouter()
router.register(r'manufacturers', ManufacturerViewSet)
router.register(r'machines', MachineViewSet)
router.register(r'operators', OperatorViewSet)
router.register(r'purchase-history', PurchaseHistoryViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
#     path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
#     path('api/user/role/', user_role, name='user_role'),
#     path('api/login/', login, name='login'),  # Add the login endpoint


# ]

urlpatterns = [
    path('', homepage, name='homepage'),  # Homepage route
    path('api/user/role/', user_role, name='user_role'),  # User role route
    path('api/login/', login, name='login'),  # Login route
]