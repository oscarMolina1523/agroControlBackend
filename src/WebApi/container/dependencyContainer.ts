import { container } from "tsyringe";
import { ICatalogRepository } from "./../../Domain/repositories/catalogRepository.interface";
import { CatalogRepository } from "./../../Infrastructure/repositories/catalog.repository";
import { ICatalogService } from "./../../Application/interfaces/catalog.service.interface";
import { CatalogService } from "./../../Application/services/catalog.service";
import { CatalogController } from "./../controllers/catalog.controller";
import { IUserRepository } from "./../../Domain/repositories/userRepository.interface";
import { UserRepository } from "./../../Infrastructure/repositories/user.repository";
import { IUserService } from "./../../Application/interfaces/user.service.interface";
import { UserService } from "./../../Application/services/user.service";
import { UserController } from "./../controllers/user.controller";
//builder, database connection and entity service

// AUTO-GENERATED MODULE REGISTRATIONS
// Catalog
container.register<ICatalogRepository>("ICatalogRepository", { useClass: CatalogRepository });
container.register<ICatalogService>("ICatalogService", { useClass: CatalogService });
container.register<CatalogController>("CatalogController", { useClass: CatalogController });
// User
container.register<IUserRepository>("IUserRepository", { useClass: UserRepository });
container.register<IUserService>("IUserService", { useClass: UserService });
container.register<UserController>("UserController", { useClass: UserController });