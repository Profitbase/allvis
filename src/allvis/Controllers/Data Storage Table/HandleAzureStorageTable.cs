using System.Data;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Azure.Cosmos.Table;
using Microsoft.Extensions.Hosting;
using Microsoft.WindowsAzure.StorageClient;
using CloudTableClient = Microsoft.Azure.Cosmos.Table.CloudTableClient;

namespace allvis.Controllers.Data_Storage_Table
{
   
    public class HandleAzureStorageTable
    {
        private static HandleAzureStorageTable instance = null;

        private static CloudTable informationboard;
        public static HandleAzureStorageTable GetInstance
        {
            get
            {
                if (instance == null)
                    instance = new HandleAzureStorageTable();
                return instance;
            }
        }

        private HandleAzureStorageTable()
        {
            var storageConnectionString = "";
            var tablename = "InformationBoard";

            //Cretaing storage account for connectivity
            CloudStorageAccount storageAccount;
            storageAccount = CloudStorageAccount.Parse(storageConnectionString);

            //creating cloud reference to the table
            CloudTableClient tableClient = storageAccount.CreateCloudTableClient(new TableClientConfiguration());
            CloudTable table = tableClient.GetTableReference(tablename);

            informationboard = table;
        }


        public static async Task MergeUser(UpdateTable entity)
        {
            try
            {
                TableOperation insertOrMergeOperation = TableOperation.InsertOrMerge(entity);

                TableResult result = await informationboard.ExecuteAsync(insertOrMergeOperation);
                UpdateTable insertedEntity = result.Result as UpdateTable;
            }
            catch (System.Exception ex)
            {

                throw;
            }
        }

        public async Task<GetFacebookAndTwitterEntity> AmountOfPosts (string ID, string city)
        {
            TableOperation retrieveOperation = TableOperation.Retrieve<GetFacebookAndTwitterEntity>(ID, city);
            TableResult result = await informationboard.ExecuteAsync(retrieveOperation);
            GetFacebookAndTwitterEntity amount = result.Result as GetFacebookAndTwitterEntity;

            return amount;
        }

        public async Task<GetTheWeekLunch> GetLunch(string ID, string city)
        {
            TableOperation retrieveOperation = TableOperation.Retrieve<GetTheWeekLunch>(ID, city);
            TableResult result = await informationboard.ExecuteAsync(retrieveOperation);
            GetTheWeekLunch lunch = result.Result as GetTheWeekLunch;

            return lunch;
        }
    }

    public class GetFacebookAndTwitterEntity : TableEntity
    {
        public int AmountOfPostsFacebook { get; set; }
        public int AmountOfPostsTwitter { get; set; }
    }

    public class GetTheWeekLunch : TableEntity
    {
        public string lunchMonday { get; set; }
        public string lunchTuesday { get; set; }
        public string lunchWensday { get; set; }
        public string lunchThursday { get; set; }
        public string lunchFriday { get; set; }

    }

    public class UpdateTable : TableEntity  
    {
        public double amountOfPostsFacebook { get; set; }
        public double amountOfPostsTwitter { get; set; }
        public string lunchMonday { get; set; }
        public string lunchTuesday { get; set; }
        public string lunchWensday { get; set; }
        public string lunchThursday { get; set; }
        public string lunchFriday { get; set; }
    }
}

