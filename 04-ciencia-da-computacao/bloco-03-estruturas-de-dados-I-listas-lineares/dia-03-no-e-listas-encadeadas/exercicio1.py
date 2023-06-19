#1
def clear(self):
    self.head_value = None
    self.__length = 0
#2
def clear(self):
    while not self.is_empty():
        self.remove_first()

def __get_node_at(self, position):
    value_to_be_returned = self.head_value
    if value_to_be_returned:
        while position > 0 and value_to_be_returned.next:
            value_to_be_returned = value_to_be_returned.next
            position -= 1
    return value_to_be_returned