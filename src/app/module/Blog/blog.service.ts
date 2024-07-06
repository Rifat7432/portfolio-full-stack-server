import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.modle";

const createBlogIntoBD = async (Blog: TBlog) => {
  const result = await BlogModel.create(Blog);
  return result;
};
const getBlogFromBD = async () => {
  const result = await BlogModel.find().sort('-createdAt');
  return result;
};
const getABlogFromBD = async (id: string) => {
  const result = await BlogModel.findById(id);
  return result;
};
const updateBlogIntoBD = async (id: string,data:Partial<TBlog>) => {
  const result = await BlogModel.findByIdAndUpdate(id,data);
  return result;
};
export const BlogService = {
  createBlogIntoBD,
  getBlogFromBD,
  getABlogFromBD,
  updateBlogIntoBD
};
