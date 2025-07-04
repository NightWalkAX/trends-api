# Google Trends API Serverless (Vercel)

API serverless desplegable en Vercel para consultar tendencias de Google Trends fácilmente desde cualquier lenguaje, incluyendo Python.

## Endpoints

- **/api/daily**  
  Tendencias diarias.  
  Parámetros:  
  - `geo` (opcional, por defecto `US`): código de país.

- **/api/realtime**  
  Tendencias en tiempo real.  
  Parámetros:  
  - `geo` (opcional, por defecto `US`): código de país.  
  - `category` (opcional, por defecto `all`): categoría.

- **/api/related-topics**  
  Temas relacionados a una palabra clave.  
  Parámetros:  
  - `keyword` (obligatorio): palabra clave.  
  - `geo` (opcional, por defecto `US`): código de país.

## Ejemplo de uso desde Python

```python
import requests

# Daily trends
r = requests.get('https://<tu-proyecto>.vercel.app/api/daily?geo=MX')
print(r.json())

# RealTime trends
r = requests.get('https://<tu-proyecto>.vercel.app/api/realtime?geo=MX&category=all')
print(r.json())

# Related topics
r = requests.get('https://<tu-proyecto>.vercel.app/api/related-topics?keyword=python&geo=MX')
print(r.json())
```

## Despliegue en Vercel

1. Instala dependencias:
   ```sh
   npm install
   ```

2. Sube tu proyecto a GitHub/GitLab/Bitbucket.

3. Importa el repositorio en [Vercel](https://vercel.com/import).

4. Vercel detectará automáticamente la carpeta `api` y desplegará los endpoints.

## Tecnologías

- [Express](https://expressjs.com/)
- [google-trends-api](https://www.npmjs.com/package/google-trends-api)
- [serverless-http](https://www.npmjs.com/package/serverless-http)
- [Vercel](https://vercel.com/)

---

**Licencia:** MIT