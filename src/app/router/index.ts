import { Router } from "express";
import { ProjectRoutes } from "../module/Project/project.route";
import { BlogRoutes } from "../module/Blog/blog.route";
import { UserRoutes } from "../module/Users/user.route";
import { SkillRoutes } from "../module/Skills/skills.route";

const router = Router();

const moduleRoutes: { path: string; route: Router }[] = [
  { path: "/", route: ProjectRoutes },
  { path: "/", route: BlogRoutes },
  { path: "/", route: UserRoutes },
  { path: "/", route: SkillRoutes },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
