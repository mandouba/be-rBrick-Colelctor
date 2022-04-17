from django.db import models
from django.urls import reverse

OWNERS = (
    ('F', 'First Owner'),
    ('P', 'Pre-owned'),
    )

class Color(models.Model):
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=20)

def __str__(self):
    return self.name

def get_absolute_url(self):
    return reverse('colors_detail', kwargs={'pk': self.id})

class Bear(models.Model):
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    description = models.CharField(max_length=10000)
    size = models.CharField(max_length=10)
    color = models.ManyToManyField(Color)



def __str__(self):
        return self.name

def get_absolute_url(self):
    return reverse('detail', kwargs={'bear_id': self.id})

class Quality(models.Model):
  date = models.DateField('Quality')
  owner = models.CharField(
    max_length=1,
    choices=OWNERS,
    default=OWNERS[0][0]
    )

bear = models.ForeignKey(
    Bear, 
    on_delete=models.CASCADE
    )
def __str__(self):
    return f"{self.get_owner_display()} on {self.date}"

class Meta:
    ordering = ['-date']




# bears = [
#   Bear('Be@rbrick Tom Flocky', '$210.00 USD', '100% plastic. 100% and 400% versions come as a set. Swivel head, waist, and wrist. Ball joint arms and legs.', '11.02 in'),
#   Bear('Be@rbrick Tweety', '$685.00 USD', '100% plastic. 1000% version. Swivel head, waist, and wrist. Ball joint arms and legs.', '27.55 in'),
#   b = Bear(name='Be@rbrick Pac-Man Black', price='$785.00 USD', description='100% plastic. 1000% version. Graphic print at the front and back. Pac-Man logo at the back. Swivel head, waist, and wrist. Ball joint arms and legs.', size='27.55 in')
# ]