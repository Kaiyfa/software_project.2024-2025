from django.db import models

class Machine(models.Model):
    MachineID = models.AutoField(primary_key=True)
    ManufacturerID = models.IntegerField()
    ModelNumber = models.CharField(max_length=50)
    Type = models.CharField(max_length=50, null=True, blank=True)
    PurchaseDate = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.ModelNumber

class Maintenance(models.Model):
    MaintenanceID = models.AutoField(primary_key=True)
    Machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    MaintenanceDate = models.DateField()
    IssueReported = models.CharField(max_length=255, null=True, blank=True)
    MaintenanceCost = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return f"{self.Machine.ModelNumber} - {self.MaintenanceDate}"

class Manufacturer(models.Model):
    ManufacturerID = models.AutoField(primary_key=True)  # Auto-incrementing primary key
    Name = models.CharField(max_length=100)  # varchar(100)
    Country = models.CharField(max_length=50, null=True, blank=True)  # varchar(50), allows NULL
    ContactDetails = models.CharField(max_length=150, null=True, blank=True)  # varchar(150), allows NULL
    YearEstablished = models.IntegerField(null=True, blank=True)  # int, allows NULL
    CertificationLevel = models.CharField(
        max_length=50,
        choices=[('ISO 9001', 'ISO 9001'), ('ISO 14001', 'ISO 14001'), ('Other', 'Other')],
        default='Other'
    )  # enum with default value

    def __str__(self):
        return self.Name
    

class Operator(models.Model):
    OperatorID = models.AutoField(primary_key=True)  # Auto-incrementing primary key
    Name = models.CharField(max_length=100)  # varchar(100)
    ContactDetails = models.CharField(max_length=150, null=True, blank=True)  # varchar(150), allows NULL
    Role = models.CharField(
        max_length=50,
        choices=[('Technician', 'Technician'), ('Supervisor', 'Supervisor'), ('Manager', 'Manager')]
    )  # enum

    def __str__(self):
        return self.Name
    
class PurchaseHistory(models.Model):
    PurchaseID = models.AutoField(primary_key=True)  # Auto-incrementing primary key
    MachineID = models.ForeignKey('Machine', on_delete=models.CASCADE)  # Foreign key to Machine
    Vendor = models.CharField(max_length=100, null=True, blank=True)  # varchar(100), allows NULL
    PurchaseDate = models.DateField()  # date
    Amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # decimal(10,2), allows NULL
    WarrantyExpiry = models.DateField(null=True, blank=True)  # date, allows NULL
    PurchaseMethod = models.CharField(
        max_length=50,
        choices=[('Cash', 'Cash'), ('Credit', 'Credit'), ('Leasing', 'Leasing')]
    )  # enum

    def __str__(self):
        return f"Purchase {self.PurchaseID} for Machine {self.MachineID}"
    
class ProductionSummary(models.Model):
    MachineID = models.IntegerField()  # int
    ModelNumber = models.CharField(max_length=50)  # varchar(50)
    Shift = models.CharField(max_length=50)  # varchar(50)
    TotalProduction = models.IntegerField()  # int

    class Meta:
        managed = False  # This tells Django not to manage this model's database table
        db_table = 'productionsummary'  # The name of the view in the database

    def __str__(self):
        return f"Machine {self.MachineID} - {self.ModelNumber}"