import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
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
}
