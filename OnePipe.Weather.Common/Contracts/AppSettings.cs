using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnePipe.Weather.Common.Contracts
{
    public class AppSettings
    {
        public string ServiceBaseUrl { get; set; }
        public string ApiKey { get; set; }
    }
}
