#include <iostream>
#include <unordered_map>
#include <string>

int romanToInt(const std::string& s) {
    std::unordered_map<char, int> romanValues = {

        {'N', 0}, {'I', 1}, {'V', 5}, {'X', 10},
        {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}
    };

    int total = 0;
    int prevValue = 0;
    
    for (int i = s.size() - 1; i >= 0; --i) {
        char currentChar = toupper(s[i]);
        int value = romanValues.count(currentChar) ? romanValues[currentChar] : 0;
        
        if (value >= prevValue) {
            total += value;
        } else {
            total -= value;
        }
        prevValue = value;
    }
    
    return total;
}

int main() {
    std::string romanNumeral = "MCMXCIV";
    int integerValue = romanToInt(romanNumeral);
    std::cout << "The integer value of " << romanNumeral << " is " << integerValue << ".\n";
    
    std::string zeroNumeral = "N";
    int zeroValue = romanToInt(zeroNumeral);
    std::cout << "The integer value of " << zeroNumeral << " is " << zeroValue << ".\n";
    
    std::string invalidNumeral = "iiib";
    int invalidValue = romanToInt(invalidNumeral);
    std::cout << "The integer value of " << invalidNumeral << " is " << invalidValue << ".\n";
    
    std::string customNumeral = "iuv";
    int customValue = romanToInt(customNumeral);
    std::cout << "The integer value of " << customNumeral << " is " << customValue << ".\n";
    
    return 0;
}
