This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

<!--  -->

Empezamos el proyexto instalando las dependencias de desarrollo
` npm i -D tailwindcss postcss autoprefixer   `

Posteriormente ejecutamos el siguiente comando para agregar un archivo de configuración de tailwind `npx tailwindcss init -p`
 y agregamos las siguientes lineas a `styles/globals.css`
 ```
@tailwind base;
@tailwind components;
@tailwind utilities;
 ```

 Después instalamos una dependencia de desarrollo y otra para el ambiente de producción
 ```
 npm i -D prisma
 npm i @prisma/client
 npx prisma init
 ```

 Una vez que se haya creado el schema.prisma tendrás que modificar la variable de entorno para conertarte con tu base de datos y posteriormente deberás definir tus modelos.

Después podrás ejecutar el siguiente comando `npx prisma migrate dev` y te preguntará si quieres agregar un nombre, puedes poner lo que sea, como 'initial'

Una forma de resetear tu base de datos es con `npx prisma migrate reset`
Una herramienta muy útil podría ser `npx prisma studio`

Para algunas configuraciones de prisma es necesario utilizar typescrip por lo que tendrás que instalar la siguiente dependencia
```
npm i ts-node
```