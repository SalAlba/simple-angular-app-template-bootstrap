############  BUILD  ############
FROM node:14.14-alpine3.11 AS compile-image

WORKDIR /opt/ng
COPY package.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH" 
COPY . ./
RUN ng build --prod

############  RUN  ############
FROM nginx
# COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /opt/ng/dist/app /usr/share/nginx/html