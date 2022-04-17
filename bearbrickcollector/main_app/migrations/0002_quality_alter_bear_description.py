# Generated by Django 4.0.3 on 2022-04-15 05:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Quality',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('owner', models.CharField(choices=[('F', 'First Owner'), ('P', 'Pre-owned')], default='F', max_length=1)),
            ],
        ),
        migrations.AlterField(
            model_name='bear',
            name='description',
            field=models.CharField(max_length=10000),
        ),
    ]