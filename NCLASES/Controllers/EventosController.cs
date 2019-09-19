using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NCLASES.Controllers
{
    public class EventosController : Controller
    {
        // GET: Eventos
        public ActionResult Eventos()
        {
            return View();
        }

        public ActionResult DetalleEventos(int id)
        {
            ViewBag.id = id;
            return View();
        }
    }
}