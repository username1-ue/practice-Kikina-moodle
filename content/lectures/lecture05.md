
**lecture05.md:**
```markdown
# Лекция 5 — Автоматизация бэкапов

**Тема:** Скрипты для автоматического резервного копирования
**Цель урока:** Написать простой скрипт бэкапа
**Время:** 20 мин.
**Ключевые понятия:** скрипт, автоматизация, cron, планировщик

## 1) Введение
Ручное копирование утомительно. Лучше автоматизировать процесс.

## 2) Основная часть
**Планировщики задач:**
- Windows: Task Scheduler
- Linux: cron
- macOS: launchd

**Простой скрипт бэкапа (backup.sh):**
```bash
#!/bin/bash
BACKUP_DIR="/backup/$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR
cp -r /important/data $BACKUP_DIR
echo "Backup created at $BACKUP_DIR"
3) Пример
Добавление в cron на Linux (запуск каждый день в 2 ночи):

0 2 * * * /home/user/backup.sh
Задание:
Напишите скрипт, который копирует папку Documents в папку Backup с датой

Источники:

https://losst.pro/nastrojka-cron

Автор: Кикина / Дата: 2026-03-19