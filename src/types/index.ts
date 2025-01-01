import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ProjectType = {
  index: number;
  name: string;
  live_url: string;
  description: string;
  tools: string;
  repo_url?: string;
  image: string;
  light_img: string | null;
};

export type RepositoryType = {
  id: number;
  name: string;
  language: string;
  description: string;
  clone_url: string;
  languages_url: string;
  languages: string[];
};

export type RepositoryListType = RepositoryType[];

export interface PaginateProps {
  page: number;
  limit: number;
  total_page: number;
  total_items: number;
}
