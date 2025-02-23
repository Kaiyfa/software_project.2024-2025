from django.contrib import admin
from .models import Manufacturer, Machine, ProductionSummary,  PurchaseHistory, Operator, Maintenance

admin.site.register(Manufacturer)
admin.site.register(Machine)
admin.site.register(ProductionSummary)
admin.site.register(PurchaseHistory)
admin.site.register(Operator)
admin.site.register(Maintenance)