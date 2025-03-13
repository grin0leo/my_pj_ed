# Шаг 1: Используем официальный образ Node.js на базе Alpine для сборки
FROM node:18-alpine AS builder

# Шаг 2: Устанавливаем рабочую директорию
WORKDIR /app

# Шаг 3: Копируем файлы package.json и package-lock.json
COPY package.json package-lock.json ./

# Шаг 4: Устанавливаем зависимости
RUN npm install --frozen-lockfile

# Шаг 5: Копируем весь код проекта
COPY . .

# Шаг 6: Собираем Next.js проект
RUN npm run build

# Шаг 7: Используем легковесный образ для запуска
FROM node:18-alpine AS runner

# Шаг 8: Устанавливаем рабочую директорию
WORKDIR /app

# Шаг 9: Копируем файлы из builder-образа
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Шаг 10: Открываем порт 3000
EXPOSE 3000

# Шаг 11: Команда для запуска Next.js в production
CMD ["npm", "run", "start"]
