using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algo
{
    public class CanBecomePalindrome
    {
        public static bool CanStringBecomePalindrome(string input)
        {
            //input: aab 
            //Logic: if the number of odd characters is 1 , there can be many even no of characters
            //aab : b=> 1 , a=>2  , just 1 odd return true

            int oddCount = 0;
            Dictionary<char, int> count = new Dictionary<char, int>();
            foreach (char ch in input)
            {
                if (count.ContainsKey(ch))
                {
                    count[ch]++;
                }
                else
                {
                    count.Add(ch, 1);
                }
            }

            foreach (var item in count)
            {
                if (item.Value %2 !=0)
                {
                    oddCount++;
                    if (oddCount >1)
                    {
                        return false;
                    }
                    
                }
            }
            

            return true;
        }
    }
}
