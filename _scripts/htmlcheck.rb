#! /usr/bin/env ruby
require 'html/proofer'

# Checks if all the links are sane and don’t end up in a 404.
# If the build fails you will receive an email.
HTML::Proofer.new('./_site').run
