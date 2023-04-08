/*
* Pages and Layouts ->

A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.


You can define a layout by default exporting a React component from a layout.js file. The component should accept a children prop that will be populated with a child layout (if it exists) or a child page during rendering.

 */



export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode,
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        {children}
      </section>
    );
  }

  /*
  Nesting Layouts

Layouts defined inside a folder (e.g. app/dashboard/layout.js) apply to specific route segments (e.g. acme.com/dashboard) and render when those segments are active. By default, layouts in the file hierarchy are nested, which means they wrap child layouts via their children prop.

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return <section>{children}</section>;
}

  */

