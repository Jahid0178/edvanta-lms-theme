import dynamicIconImports from "lucide-react/dynamicIconImports";

export type HeaderNavigationLink = {
  label: string;
  href: string;
};

export type Category = {
  id: number;
  title: string;
  slug: string;
  count: number;
  icon: keyof typeof dynamicIconImports;
};
