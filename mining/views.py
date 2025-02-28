from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Manufacturer, Machine, Operator, PurchaseHistory
from .serializers import ManufacturerSerializer, MachineSerializer, OperatorSerializer, PurchaseHistorySerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .serializers import CustomTokenObtainPairSerializer
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
# mining/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


# mining/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt  # Allow POST requests without CSRF token (for testing)
def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')

            # Simulate login logic (replace with actual authentication)
            if username == 'admin' and password == 'soulmate12':
                return JsonResponse({'success': True, 'role': 'admin'})
            else:
                return JsonResponse({'success': False, 'error': 'Invalid credentials'}, status=400)
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=500)
    return JsonResponse({'success': False, 'error': 'Invalid request method'}, status=405)

class ManufacturerViewSet(viewsets.ModelViewSet):
    queryset = Manufacturer.objects.all()
    serializer_class = ManufacturerSerializer
    permission_classes = [IsAuthenticated]


class MachineViewSet(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer

class OperatorViewSet(viewsets.ModelViewSet):
    queryset = Operator.objects.all()
    serializer_class = OperatorSerializer

class PurchaseHistoryViewSet(viewsets.ModelViewSet):
    queryset = PurchaseHistory.objects.all()
    serializer_class = PurchaseHistorySerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    def validate(self, attrs):
        data = super().validate(attrs)
        # Add extra responses here if needed
        data['message'] = "Login successful!"
        return data


def homepage(request):
    return HttpResponse("Welcome to the GMMS API!")


def user_role(request):
    # Example: Fetch the user role (replace with your logic)
    user_role = 'admin'  # Replace with actual logic to determine the role
    return JsonResponse({'role': user_role})




