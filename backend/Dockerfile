FROM openjdk:21-alpine

WORKDIR /app

COPY pom.xml .
RUN mvnw dependency:go-offline -B

COPY . .

RUN mvnw spring-boot:build-image

EXPOSE 8080

CMD ["java", "-jar", "target/spring-boot-app.jar"]
