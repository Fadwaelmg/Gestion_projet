# Étape 1 : Utiliser une image de base contenant JDK 17 (ou la version requise)
FROM openjdk:21-jdk-slim

# Étape 2 : Définir un répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier le fichier JAR généré dans l'image
COPY target/CRUD-0.0.1-SNAPSHOT.jar app.jar

# Étape 4 : Exposer le port sur lequel Spring Boot écoute
EXPOSE 8080

# Étape 5 : Commande pour exécuter l'application
ENTRYPOINT ["java", "-jar", "app.jar"]
