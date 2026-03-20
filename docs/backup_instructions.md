Вариант 1: Резервное копирование с помощью Git
Инициализация репозитория
bash
# Создать папку для проекта
mkdir myproject
cd myproject

# Инициализировать Git репозиторий
git init

# Добавить файлы
git add .
git commit -m "Initial commit"
Создание бэкапа через Git
bash
# Посмотреть историю изменений
git log

# Вернуться к предыдущей версии
git checkout commit_hash

# Создать бэкап на GitHub
git remote add origin https://github.com/username/repo.git
git push -u origin main

Вариант 2: Автоматический скрипт бэкапа
Скрипт backup.sh
bash
#!/bin/bash
# Автоматическое резервное копирование

BACKUP_DIR="/backup/$(date +%Y%m%d_%H%M%S)"
SOURCE_DIR="/home/user/documents"

# Создать папку для бэкапа
mkdir -p $BACKUP_DIR

# Скопировать файлы
cp -r $SOURCE_DIR $BACKUP_DIR

# Создать архив
tar -czf $BACKUP_DIR/backup.tar.gz -C $BACKUP_DIR .

# Удалить временные файлы
rm -rf $SOURCE_DIR

echo "Бэкап создан: $BACKUP_DIR/backup.tar.gz"
Настройка автоматического запуска (cron)
bash
# Редактировать crontab
crontab -e

# Добавить строку для ежедневного бэкапа в 2:00 ночи
0 2 * * * /home/user/backup.sh >> /var/log/backup.log 2>&1

Вариант 3: Для Windows (PowerShell)
Скрипт backup.ps1
powershell
# PowerShell скрипт для бэкапа
$source = "C:\Users\Администратор\Documents"
$destination = "D:\Backup\Documents_$(Get-Date -Format 'yyyyMMdd')"

# Копирование
Copy-Item -Path $source -Destination $destination -Recurse -Force

# Создание ZIP архива
Compress-Archive -Path $destination -DestinationPath "$destination.zip"

Write-Host "Бэкап создан: $destination.zip"
Планировщик задач Windows
Откройте "Планировщик задач"

Создайте задачу

Укажите триггер: ежедневно в 2:00

Действие: запуск PowerShell с параметром -File C:\scripts\backup.ps1

Проверка бэкапа
bash
# Проверить, что бэкап создан
ls -la /backup/

# Проверить целостность архива
tar -tzf backup.tar.gz

# Восстановить из бэкапа
tar -xzf backup.tar.gz -C /путь/восстановления

Рекомендации
1.Правило 3-2-1: 3 копии, 2 разных носителя, 1 копия вне офиса
2.Регулярность: Ежедневные бэкапы важных данных
3.Проверка: Периодически проверяйте, что бэкапы восстанавливаются
4.Шифрование: Храните бэкапы в зашифрованном виде
5.Автоматизация: Используйте cron или планировщик задач

Инструкция подготовлена для курса "Работа с файлами"