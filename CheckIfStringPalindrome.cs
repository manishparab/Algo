using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algo
{
    public class CheckIfStringPalindrome
    {
        //aba , aabb 
        //comapre the first half with other half
        public static bool CheckPalindrome(string input)
        {
            for (int i = 0; i <= input.Length /2; i++)
            {
                if (input[i] != input[input.Length -1-i])
                {
                    return false;
                }                  
            }
            return true;
        }

    }
}
