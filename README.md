
```markdown
# Docker-контейнер для Next.js проекта

## Описание  
Этот проект представляет собой Next.js приложение, упакованное в Docker-контейнер. Приложение включает маршрут `/auth/login`, в нем я постарался отразить основные принципы библиотеки react hook-form.  



## Установка Docker  

### Windows  
1. Скачайте и установите **[Docker Desktop](https://www.docker.com/products/docker-desktop/)**.  
2. Перезагрузите компьютер после установки.  
3. Проверьте корректность установки:  
   ```sh
   docker --version
   ```

### macOS  
1. Установите **[Docker Desktop](https://www.docker.com/products/docker-desktop/)**.  
2. Запустите Docker и убедитесь, что он работает.  
3. Проверьте версию Docker:  
   ```sh
   docker --version
   ```

### Linux  
1. Обновите систему и установите Docker:  
   ```sh
   sudo apt update && sudo apt install -y docker.io
   ```
2. Добавьте текущего пользователя в группу Docker:  
   ```sh
   sudo usermod -aG docker $USER
   ```
3. Перезагрузите систему.  
4. Проверьте установку:  
   ```sh
   docker --version
   ```
## Клонирование c Github 
ИСПРАВИТЬ 

## Сборка контейнера  
Перейдите в каталог проекта и выполните команду:  
```sh
docker build -t my-pj-ed .
```

## Запуск контейнера  
```sh
docker run -p 3000:3000 my-pj-ed
```
Приложение будет доступно по адресу:  
[http://localhost:3000/auth/login](http://localhost:3000/auth/login)  

## Возможные ошибки и их решения  

### Порт уже используется  
**Описание:**  
```
Error response from daemon: driver failed programming external connectivity on endpoint
```
**Решение:**  
Проверить процесс, занимающий порт 3000:  
```sh
lsof -i :3000
```
Завершить процесс:  
```sh
kill -9 <PID>
```
Либо запустить контейнер на другом порту:  
```sh
docker run -p 8080:3000 my-next-app
```

### Ошибка прав доступа  
**Описание:**  
```
permission denied while trying to connect to the Docker daemon
```
**Решение:**  
Добавить пользователя в группу Docker:  
```sh
sudo usermod -aG docker $USER
```
Перезагрузить систему.

### Ошибка при сборке  
**Описание:**  
```
npm ERR! missing script: build
```
**Решение:**  
Проверить файл `package.json`, убедиться, что в секции `scripts` присутствует:  
```json
"scripts": {
  "build": "next build",
  "start": "next start"
}
```
Если команда отсутствует, добавить и пересобрать контейнер.
