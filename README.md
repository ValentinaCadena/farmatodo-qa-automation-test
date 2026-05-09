# 🧪 Prueba Técnica QA Automation - Farmatodo

> Automatización de pruebas con **Playwright** + **TypeScript** usando el patrón **Page Object Model (POM)**

---

## 🚀 Stack Tecnológico

**Playwright** • **TypeScript** • **Node.js** • **POM Pattern**

---

## � Instalación Rápida

```bash
# 1. Clonar repositorio
git clone <url-repositorio>
cd Farmatodo

# 2. Instalar dependencias
npm install

# 3. Instalar navegadores
npx playwright install --with-deps
```

**Requisitos:** Node.js v16+ y Git

---

## ▶️ Comandos de Ejecución

```bash
npm run test:all      # Ejecutar todas las pruebas
npm run test:api      # Solo pruebas de API
npm run test:e2e      # Solo pruebas E2E
npm run report        # Ver reporte HTML
```

---

## 📁 Estructura del Proyecto

```
src/
├── api/              # Servicios de API (PokéAPI)
├── pages/            # Page Objects (Login, Products, Cart, Checkout)
└── utils/            # Constantes y utilidades

tests/
├── api/              # Pruebas de integración
└── e2e/              # Pruebas End-to-End
```

---

## 🧪 Pruebas Implementadas

### 📌 Punto 1: Integración con PokéAPI

**Objetivo:** Obtener la cadena de evolución de Squirtle y ordenarla alfabéticamente

**Flujo:**
1. Conectar a PokéAPI
2. Obtener evoluciones: Squirtle → Wartortle → Blastoise
3. Extraer pesos de cada Pokémon
4. Ordenar alfabéticamente **sin usar `.sort()`** (Bubble Sort)
5. Validar respuestas HTTP 200

**Resultado:**
```
1. BLASTOISE - Peso: 855
2. SQUIRTLE - Peso: 90
3. WARTORTLE - Peso: 225
```

📄 **Archivo:** `tests/api/evolution.spec.ts`

---

### � Punto 2: E2E en SauceDemo

**Objetivo:** Flujo completo de compra con validación de datos

**Flujo:**
1. Login con usuario aleatorio
2. Buscar producto "Sauce Labs Fleece Jacket"
3. Capturar nombre y precio
4. Agregar al carrito
5. Validar que nombre y precio coincidan en el carrito ✅
6. Completar checkout

**Resultado:**
```
✅ Producto: Sauce Labs Fleece Jacket
💰 Precio: $49.99
🎯 Validación exitosa
```

📄 **Archivo:** `tests/e2e/saucedemo.spec.ts`

**Page Objects:** `LoginPage` • `ProductsPage` • `CartPage` • `CheckoutPage`

---

## 🎯 Características Destacadas

✅ Patrón **POM** para mantenibilidad  
✅ Algoritmo de ordenamiento **personalizado** (Bubble Sort)  
✅ Validaciones **exhaustivas** de datos  
✅ Usuarios **aleatorios** para mayor cobertura
✅ Reportes **HTML** detallados  

---

## 📊 Ver Reportes

```bash
npm run report
```

Los reportes incluyen screenshots, videos y logs detallados de cada prueba.

---

## 🔧 Configuración

El proyecto está configurado para ejecutarse en **2 navegadores** (Chromium, Firefox) con modo visual activado para desarrollo.

Para cambiar a modo headless:

```typescript
// playwright.config.ts
use: {
  headless: true,
}
```

---

## 🐛 Solución de Problemas

| Problema | Solución |
|----------|----------|
| Error de módulos | `npm install` |
| Navegadores no instalados | `npx playwright install --with-deps` |
| Tests lentos | Cambiar `headless: true` en config |

---

## 👨‍� Desarrollado para

**Farmatodo S.A.S.** - Prueba Técnica QA Automation Engineer

---

**✨ Proyecto completo con todas las mejores prácticas de automatización ✨**
