declare interface AuthFormProps {
  type: "login" | "register";
}

declare interface SidebarFieldItem {
  label: string;
  icon: React.ReactNode;
  route: string;
}
