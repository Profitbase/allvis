using System.Threading.Tasks;
using allvis.Controllers.Dtos;
using Microsoft.Azure.Cosmos.Table;
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
            var storageConnectionString = "DefaultEndpointsProtocol=https;AccountName=allvisdatabase;AccountKey=bjmhQAtIq2Z+OBzZnNxEbnOctOATfwMD1aiYnEM2IjfX4D7McU5YyXc6RsTeWtVhhjosRStmh077tXzE3FK58w==;EndpointSuffix=core.windows.net";
            var tablename = "Allvi02";

            CloudStorageAccount storageAccount;
            storageAccount = CloudStorageAccount.Parse(storageConnectionString);

            CloudTableClient tableClient = storageAccount.CreateCloudTableClient(new TableClientConfiguration());
            CloudTable table = tableClient.GetTableReference(tablename);
            informationboard = table;

        }

        public async Task UpdateData(AdminDataDto data)
        {
            UpdateTable azure = new UpdateTable("1", "sandnes")
            {
                amountOfPostsTwitter = data.AmountOfTweeets,
                amountOfPostsFacebook = data.AmountOfFacebookPosts,
                lunchMonday = data.LunchMonday,
                lunchTuesday = data.LunchTuesday,
                lunchWensday = data.LunchWednesday,
                lunchThursday = data.LunchThursday,
                lunchFriday = data.LunchFriday
            };

            await MergeTable(informationboard, azure);
        }

        public static async Task MergeTable(CloudTable informationboard, UpdateTable entity)
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

        public async Task<GetFacebookAndTwitterEntity> AmountOfPosts(string ID, string city)
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
        public int amountOfPostsFacebook { get; set; }
        public int amountOfPostsTwitter { get; set; }
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
        public UpdateTable(string partitionKey, string rowKey) : base(partitionKey, rowKey)
        {
        }

        public int amountOfPostsFacebook { get; set; }
        public int amountOfPostsTwitter { get; set; }
        public string lunchMonday { get; set; }
        public string lunchTuesday { get; set; }
        public string lunchWensday { get; set; }
        public string lunchThursday { get; set; }
        public string lunchFriday { get; set; }
    }
}

