import { env } from "./env";

export const swaggerDocument = {
  openapi: "3.0.3",
  info: {
    title: "Sayem Route API",
    description:
      "Backend API for Sayem Route — Transport & Logistics Services Limited. Handles user authentication for both Individual/Business and Driver accounts.",
    version: "1.0.0",
    contact: {
      name: "Sayem Route",
    },
  },
  servers: [
    {
      url: `http://localhost:${env.PORT}`,
      description: "Local development",
    },
  ],
  tags: [
    { name: "Health", description: "Service health check" },
    { name: "Auth", description: "User registration, login, and token management" },
  ],
  paths: {
    "/health": {
      get: {
        tags: ["Health"],
        summary: "Health check",
        description: "Returns the service status. Use to verify the API is running.",
        responses: {
          "200": {
            description: "Service is healthy",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: { type: "string", example: "ok" },
                    service: { type: "string", example: "sayem-api" },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/auth/register": {
      post: {
        tags: ["Auth"],
        summary: "Register a new user",
        description:
          "Creates a new user account. Returns the user profile along with access and refresh tokens. Email and phone must be unique.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/RegisterRequest" },
              example: {
                name: "John Doe",
                email: "john@example.com",
                phone: "+2341234567890",
                accountType: "individual/business",
                password: "secret123",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Account created successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    data: { $ref: "#/components/schemas/AuthResponse" },
                  },
                },
              },
            },
          },
          "400": { $ref: "#/components/responses/ValidationError" },
          "409": {
            description: "Email or phone already registered",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorResponse" },
                example: { success: false, message: "Email already registered" },
              },
            },
          },
        },
      },
    },
    "/api/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Login",
        description:
          "Authenticates a user with email, account type, and password. Returns access and refresh tokens on success.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/LoginRequest" },
              example: {
                email: "john@example.com",
                accountType: "individual/business",
                password: "secret123",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Login successful",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    data: { $ref: "#/components/schemas/AuthResponse" },
                  },
                },
              },
            },
          },
          "400": { $ref: "#/components/responses/ValidationError" },
          "401": {
            description: "Invalid credentials or wrong account type",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorResponse" },
                example: { success: false, message: "Invalid email or password" },
              },
            },
          },
        },
      },
    },
    "/api/auth/google": {
      post: {
        tags: ["Auth"],
        summary: "Sign in with Google",
        description:
          "Authenticates a user using a Google ID token obtained from the mobile Google Sign-In SDK. If the user does not exist, a new account is created automatically. If the email is already registered with a different provider, a 409 error is returned.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/GoogleLoginRequest" },
              example: {
                idToken: "eyJhbGciOiJSUzI1NiIs...",
                accountType: "individual/business",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Google sign-in successful (existing user or new account created)",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    data: { $ref: "#/components/schemas/AuthResponse" },
                  },
                },
              },
            },
          },
          "400": { $ref: "#/components/responses/ValidationError" },
          "401": {
            description: "Invalid Google ID token or missing email",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorResponse" },
                example: { success: false, message: "Invalid Google ID token" },
              },
            },
          },
          "409": {
            description: "Email already registered with a different auth provider",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorResponse" },
                example: {
                  success: false,
                  message: "This email is already registered with local sign-in",
                },
              },
            },
          },
        },
      },
    },
    "/api/auth/apple": {
      post: {
        tags: ["Auth"],
        summary: "Sign in with Apple",
        description:
          "Authenticates a user using an Apple ID token obtained from the mobile Sign in with Apple SDK. If the user does not exist, a new account is created. Apple only provides the user's name on the very first authorization, so pass `fullName` on the initial sign-in.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/AppleLoginRequest" },
              example: {
                idToken: "eyJhbGciOiJSUzI1NiIs...",
                accountType: "driver",
                fullName: "Jane Doe",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Apple sign-in successful (existing user or new account created)",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    data: { $ref: "#/components/schemas/AuthResponse" },
                  },
                },
              },
            },
          },
          "400": { $ref: "#/components/responses/ValidationError" },
          "401": {
            description: "Invalid Apple ID token or missing email",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorResponse" },
                example: { success: false, message: "Invalid Apple ID token" },
              },
            },
          },
          "409": {
            description: "Email already registered with a different auth provider",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorResponse" },
                example: {
                  success: false,
                  message: "This email is already registered with google sign-in",
                },
              },
            },
          },
        },
      },
    },
    "/api/auth/refresh": {
      post: {
        tags: ["Auth"],
        summary: "Refresh access token",
        description:
          "Exchanges a valid refresh token for a new short-lived access token. The refresh token itself is not rotated.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/RefreshRequest" },
            },
          },
        },
        responses: {
          "200": {
            description: "New access token issued",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    data: {
                      type: "object",
                      properties: {
                        accessToken: { type: "string" },
                      },
                    },
                  },
                },
              },
            },
          },
          "400": { $ref: "#/components/responses/ValidationError" },
          "401": {
            description: "Invalid or expired refresh token",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorResponse" },
                example: {
                  success: false,
                  message: "Invalid or expired refresh token",
                },
              },
            },
          },
        },
      },
    },
    "/api/auth/logout": {
      post: {
        tags: ["Auth"],
        summary: "Logout",
        description:
          "Invalidates the provided refresh token so it can no longer be used to obtain new access tokens.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/RefreshRequest" },
            },
          },
        },
        responses: {
          "200": {
            description: "Logged out successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    message: { type: "string", example: "Logged out" },
                  },
                },
              },
            },
          },
          "400": { $ref: "#/components/responses/ValidationError" },
        },
      },
    },
    "/api/auth/me": {
      get: {
        tags: ["Auth"],
        summary: "Get current user profile",
        description:
          "Returns the authenticated user's profile. Requires a valid Bearer access token in the Authorization header.",
        security: [{ BearerAuth: [] }],
        responses: {
          "200": {
            description: "User profile",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    data: {
                      type: "object",
                      properties: {
                        user: { $ref: "#/components/schemas/UserProfile" },
                      },
                    },
                  },
                },
              },
            },
          },
          "401": {
            description: "Missing or invalid token",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorResponse" },
                example: { success: false, message: "Authentication required" },
              },
            },
          },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "Pass the access token returned from login or register",
      },
    },
    schemas: {
      RegisterRequest: {
        type: "object",
        required: ["name", "email", "phone", "accountType", "password"],
        properties: {
          name: {
            type: "string",
            minLength: 2,
            description: "Full name or business name",
          },
          email: { type: "string", format: "email" },
          phone: { type: "string", minLength: 7, description: "Phone number" },
          accountType: {
            type: "string",
            enum: ["individual/business", "driver"],
          },
          password: { type: "string", minLength: 6 },
        },
      },
      LoginRequest: {
        type: "object",
        required: ["email", "accountType", "password"],
        properties: {
          email: { type: "string", format: "email" },
          accountType: {
            type: "string",
            enum: ["individual/business", "driver"],
          },
          password: { type: "string" },
        },
      },
      GoogleLoginRequest: {
        type: "object",
        required: ["idToken", "accountType"],
        properties: {
          idToken: {
            type: "string",
            description: "ID token returned by Google Sign-In SDK on the mobile client",
          },
          accountType: {
            type: "string",
            enum: ["individual/business", "driver"],
          },
        },
      },
      AppleLoginRequest: {
        type: "object",
        required: ["idToken", "accountType"],
        properties: {
          idToken: {
            type: "string",
            description: "ID token returned by Sign in with Apple SDK on the mobile client",
          },
          accountType: {
            type: "string",
            enum: ["individual/business", "driver"],
          },
          fullName: {
            type: "string",
            description: "User's full name (Apple only provides this on the first authorization)",
          },
        },
      },
      RefreshRequest: {
        type: "object",
        required: ["refreshToken"],
        properties: {
          refreshToken: { type: "string", description: "The refresh token received at login/register" },
        },
      },
      UserProfile: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          email: { type: "string", format: "email" },
          phone: { type: "string", nullable: true },
          accountType: {
            type: "string",
            enum: ["individual/business", "driver"],
          },
          authProvider: {
            type: "string",
            enum: ["local", "google", "apple"],
            description: "How the account was created",
          },
          isVerified: { type: "boolean" },
          createdAt: { type: "string", format: "date-time" },
        },
      },
      AuthResponse: {
        type: "object",
        properties: {
          user: { $ref: "#/components/schemas/UserProfile" },
          accessToken: {
            type: "string",
            description: "Short-lived JWT (15 min)",
          },
          refreshToken: {
            type: "string",
            description: "Long-lived opaque token (7 days)",
          },
        },
      },
      ErrorResponse: {
        type: "object",
        properties: {
          success: { type: "boolean", example: false },
          message: { type: "string" },
        },
      },
      ValidationErrorResponse: {
        type: "object",
        properties: {
          success: { type: "boolean", example: false },
          message: { type: "string", example: "Validation failed" },
          errors: {
            type: "array",
            items: {
              type: "object",
              properties: {
                field: { type: "string" },
                message: { type: "string" },
              },
            },
          },
        },
      },
    },
    responses: {
      ValidationError: {
        description: "Request body validation failed",
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ValidationErrorResponse" },
            example: {
              success: false,
              message: "Validation failed",
              errors: [{ field: "email", message: "Invalid email address" }],
            },
          },
        },
      },
    },
  },
};
