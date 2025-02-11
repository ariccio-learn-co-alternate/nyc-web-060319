class Concert
  attr_reader :band, :venue, :attendance
  attr_accessor :date

  @@all = []

  def initialize(date, band, venue, attendance = 0)
    @date = date
    @band = band
    @venue = venue
    self.attendance = attendance

    @@all << self
  end

  def self.all
    @@all
  end

  def attendance=(num)
    if num < 0
      puts 'impossible'
      @attendance = 0
    elsif num > self.venue.capacity
      puts 'sorry, sold out'
      @attendance = self.venue.capacity
    else
      @attendance = num
    end
  end

  def self.highest_attendance
    # can also use max_by instead of sort_by to return just the max instance
    sorted_concerts = self.all.sort_by do |concert|
      concert.attendance
    end

    sorted_concerts[sorted_concerts.length - 1]
    # can also do sorted_concerts.last or sorted_concerts[-1]
  end
end
