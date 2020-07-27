require 'json'
require 'stringio'

# Complete the countingValleys function below.
def countingValleys(n, s)
    direction = {
        "U": (1).to_i,
        "D": (-1).to_i,
    }
    valleyCount = 0
    prev = 0
    current = 0
    s.split('').each do |step|
      current += direction[step]
      puts current
        # if prev < 0 && current === 0 
        #     valleyCount += 1
        # end
        # prev = current
    end
    valleyCount
end

string = "UUDDDDUU"
countingValleys(string.length,string);