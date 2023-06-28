class Solution:
   
    
    def swap(self, arr ,  low,high ):
        (arr[low], arr[high]) = (arr[high], arr[low])

    def partition(self,arr ,  low,high ):

        pivot = arr[high]

        i = low -1

        for j in range(low, high):
            if arr[j] < pivot:
                i+=1
                self.swap(arr,i,j)

        i+=1
        self.swap(arr,i,high)
        return i
    
    def quicksort(self,arr ,  low,high ):
        if low < high:


            pi = self.partition(arr, low,high)

            self.quicksort(arr,low,pi-1)
            self.quicksort(arr,pi+1,high)


if __name__ == '__main__':
    array = [10, 7, 8, 9, 1, 5]
    N = len(array)
 
    # Function call
    p1 = Solution()

    p1.quicksort(array, 0, N - 1)
    print('Sorted array:')
    for x in array:
        print(x, end=" ")