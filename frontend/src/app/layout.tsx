import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

