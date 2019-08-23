
using NCLASES.App_Start;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace NCLASES
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            BundleTable.EnableOptimizations = false;
            BundleConfig.RegisterBundles(BundleTable.Bundles);

        }
    }
}
