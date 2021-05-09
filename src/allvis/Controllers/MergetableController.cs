using allvis.Controllers.Data_Storage_Table;
using allvis.Controllers.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace allvis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MergetableController : ControllerBase
    {

    public string BadMessage = "Det har skjedd en feil og lysbildet er desverre ikke oppdatert!";

        [HttpPost]
        public async Task<string> Post(AdminDataDto data)
        {
            try
            {
                await HandleAzureStorageTable.GetInstance.UpdateData(data);

                return "Lysbildet er oppdatert!";

            }
            catch
            {
                return "Det har skjedd en feil og lysbildet er desverre ikke oppdatert!";

            }
        }

    }
}
