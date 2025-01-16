const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "User Management",
      version: "1.0.0",
      Description: "API User Management",
    },
  },
  apis: [__filename],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use((req, res, next) => {
  console.log(`\nResquest type: ${req.method}`);
  console.log(`Resquest type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  console.log(req.body);
  next();
});

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200);
  res.send("<h1> Helo word </h1>");
});

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get the list of users
 *     description: Fetches a list of users from the database with optional pagination.
 *     responses:
 *       200:
 *         description: A paginated list of user objects.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The user ID.
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                       password:
 *                         type: string
 *                         description: The user's email.
 *       500:
 *         description: Server error.
 */

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get the list of users by id
 *     description: Fetches a list of users from the database with optional pagination.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           required: true
 *         description: 
 
 *     responses:
 *       200:
 *         description: A paginated list of user objects.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The user ID.
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                       password:
 *                         type: string
 *                         description: The user's email.
 *       500:
 *         description: Server error.
 */

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * paths:
 *  /users:
 *   post:
 *     summary: Create a new user
 *     description: Adds a new user to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The first name of the user.
 *               lastName:
 *                 type: string
 *                 description: The last name of the user.
 *               email:
 *                 type: string
 *                 description: The email of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *     responses:
 *       201:
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier for the created user.
 *                 firstName:
 *                   type: string
 *                   description: The first name of the user.
 *                 lastName:
 *                   type: string
 *                   description: The last name of the user.
 *                 email:
 *                   type: string
 *                   description: The email of the user.
 *       500:
 *         description: Internal server error.
 */

app.post("/users", async (req, res) => {
  try {
    const users = await UserModel.create(req.body);

    res.status(201).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 *  /users/{id}:
 *    patch:
 *      description:
 *      response:
 *        200:
 *        500:
 *         description: Server error.
 */

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 *  /users/{id}:
 *    delete:
 *      description:
 *      response:
 *        200:
 *          description:
 */
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const users = await UserModel.findByIdAndDelete(id);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () =>
  console.log(
    `Start serve with Espress in port ${port}! - http://localhost:${port} \nSwagger documentation: http://localhost:${port}/api-docs`
  )
);
