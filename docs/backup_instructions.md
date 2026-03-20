# Инструкция по резервному копированию файлов

## Способ 1: cp (Linux/Mac)

```bash
# Копирование с датой
cp -r ~/Documents ~/Backup/Documents_$(date +%Y%m%d)

# Создание архива
tar -czf backup_$(date +%Y%m%d).tar.gz /путь/к/папке

# Распаковка архива
tar -xzf backup_20260320.tar.gz
```

## Способ 2: Git

```bash
# Инициализация
git init
git add .
git commit -m "Initial commit"

# Отправка на GitHub
git remote add origin https://github.com/ваш_логин/repo.git
git push -u origin main
```

## Способ 3: Автоматический скрипт (backup.sh)

```bash
#!/bin/bash
SOURCE="/home/пользователь/Documents"
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf /backup/backup_$DATE.tar.gz $SOURCE
echo "Бэкап создан"
```

## Способ 4: Windows PowerShell (backup.ps1)

```powershell
$source = "C:\Users\Администратор\Documents"
$date = Get-Date -Format "yyyyMMdd_HHmmss"
Compress-Archive -Path $source -DestinationPath "D:\Backup\backup_$date.zip"
Write-Host "Бэкап создан"
```

## Правило 3-2-1
- **3** копии данных
- **2** разных носителя
- **1** копия вне офиса

*Инструкция для курса "Работа с файлами"*