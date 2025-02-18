# Sử dụng Node.js
FROM node:18

# Đặt thư mục làm việc
WORKDIR /app

# Copy file package.json và cài đặt dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy toàn bộ code
COPY . .

# Expose port
EXPOSE 3000

# Chạy ứng dụng
CMD ["node", "src/index.js"]
